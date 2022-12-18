import Image from "next/image";
import ListLink from "./ListLink";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} alt="Logo" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <ListLink
                  title="Company"
                  list={[
                    { text: "About Us", url: "/#" },
                    { text: "Press Release", url: "/#" },
                    { text: "Terms of Use", url: "/#" },
                    { text: "Privacy & Policy", url: "/#" },
                  ]}
                />
                <ListLink
                  title="Support"
                  list={[
                    { text: "Refund Policy", url: "/#" },
                    { text: "Unlock Rewards", url: "/#" },
                    { text: "Live Chatting", url: "/#" },
                  ]}
                />
                <ListLink
                  title="Connect"
                  list={[
                    { text: "hi@store.gg", url: "mailto: hi@store.gg" },
                    { text: "team@store.gg", url: "mailto: team@store.gg" },
                    {
                      text: "Pasific 12, Jakarta Selatan",
                      url: "http://maps.google.com/?q=Pasific 12,Jakarta Selatan",
                    },
                    { text: "021 - 1122 - 9090", url: "tel: 02111229090" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
