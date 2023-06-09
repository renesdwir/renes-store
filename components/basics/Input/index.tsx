export interface InputProps {
  label: string;
  value?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
}
export default function Input(props: InputProps) {
  const { label, value, onChange, disabled, ...nativeProps } = props;
  return (
    <>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id="name"
        value={value}
        onChange={onChange}
        disabled={disabled}
        name="name"
        aria-describedby="name"
        placeholder="Enter your name"
        {...nativeProps}
      />
    </>
  );
}
