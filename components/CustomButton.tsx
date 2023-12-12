// "use client";
// import Image from "next/image";

// import { CustomButtonProps } from "@/types";

// const CustomButton = ({
//   title,
//   containerStyles,
//   handleClick,
//   btnType,
//   textStyles,
//   rightIcon,
// }: CustomButtonProps) => {
//   return (
//     <button
//       disabled={false}
//       type={btnType || "button"}
//       className={`custom-btn ${containerStyles}`}
//       onClick={handleClick}
//     >
//       <span className={`flex-1 ${textStyles}`}>{title}</span>
//       {rightIcon && (
//         <div className="relative w-6 h-6">
//           <Image
//             src={rightIcon}
//             alt="right icon"
//             fill
//             className="object-contain"
//           />
//         </div>
//       )}
//     </button>
//   );
// };

// export default CustomButton;

"use client";

import Image from "next/image";

// import { CustomButtonProps } from "@types";
import { CustomButtonProps } from "@/types";

const Button = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
}: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default Button;
