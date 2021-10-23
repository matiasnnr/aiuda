import { useState } from "react";
import styles from "@components/LoginForm/LoginForm.module.css";

interface Props {
  type: string;
  placeholder: string;
}

const useField = ({ type, placeholder }: Props) => {
  const className = styles.input;
  const [value, setValue] = useState("");

  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  return {
    className,
    type,
    placeholder,
    value,
    onChange,
  };
};

export default useField;

// Implementation example
// const App = () => {
//     const name = useField('text')
//     // ...

//     return (
//       <div>
//         <form>
//           <input
//             type={name.type}
//             value={name.value}
//             onChange={name.onChange}
//           />
//           // ...
//         </form>
//       </div>
//     )
//   }

// Is the same that
// <input {...name} />

// Reference: https://fullstackopen.com/es/part7/hooks_personalizados#mas-sobre-hooks
