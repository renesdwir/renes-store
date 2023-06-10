import Image from "next/image";
import Input from "../../components/basics/Input";
import SideBar from "../../components/sections/SideBar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { JWTPayloadTypes, UserTypes } from "../../services/dataTypes";
import jwtDecode from "jwt-decode";
import { updateProfile } from "../../services/member";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function EditProfile() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
    id: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      userFromPayload["avatar"] = `${IMG}/${userFromPayload.avatar}`;
      setUser(userFromPayload);
    }
  }, []);
  const onSubmit = async () => {
    const data = new FormData();
    data.append("image", user.avatar);
    data.append("name", user.name);
    const response = await updateProfile(data, user.id);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success("Update Success, Please Re-login");
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };
  return (
    <section className="edit-profile overflow-auto">
      <SideBar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        width={90}
                        height={90}
                        style={{ borderRadius: "100%", objectFit: "cover" }}
                        alt="upload-logo"
                      />
                    ) : (
                      <img
                        src={user.avatar}
                        width={90}
                        height={90}
                        alt="upload-logo"
                        style={{ borderRadius: "100%", objectFit: "cover" }}
                      />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      if (e.target.files) {
                        const img = e.target.files[0];
                        setImagePreview(URL.createObjectURL(img));
                        return setUser((prevUser: any) => ({
                          ...prevUser,
                          avatar: img,
                        }));
                      }
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  value={user.name}
                  onChange={(e: any) =>
                    setUser({ ...user, name: e.target.value })
                  }
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Email Address"
                  disabled={true}
                  value={user.email}
                />
              </div>
              {/* <div className="pt-30">
                <Input label="Phone" />
              </div> */}
              <div className="button-group d-flex flex-column pt-50">
                <button
                  onClick={onSubmit}
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
