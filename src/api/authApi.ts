import signInDTO from "@/contracts/SignInDTO";
import signInRespDTO from "@/contracts/SignInRespDTO";
import SignUpDTO from "@/contracts/SignUpDTO";
import SignUpRespDTO from "@/contracts/SignUpRespDTO";
import $axios from "./axios";

const signInAsync = (signInData: signInDTO): Promise<signInRespDTO> => {
  return new Promise((resolve, reject) => {
    $axios
      .post("/api/auth/sign-in", signInData)
      .then((response: any) => {
        resolve(response.data as signInRespDTO);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

const signUpAsync = (signUpData: SignUpDTO): Promise<SignUpRespDTO> => {
  return new Promise((resolve, reject) => {
    $axios
      .post("/api/auth/sign-up", signUpData)
      .then((response: any) => {
        resolve(response.data as signInRespDTO);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export { signInAsync, signUpAsync };
