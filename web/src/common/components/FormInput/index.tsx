import './styles.css';

interface Props {
  label: string;
  name: string;
  children?: JSX.Element;
}

export const FormInput = ({ label, name, children }: Props) => {
  return (
    <label htmlFor={name} class="form-input">
      <span>{label}</span>

      {children}
    </label>
  );
};
