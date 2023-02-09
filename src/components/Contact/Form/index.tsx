import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FormInput, FormTextArea } from "./FormFields";
import { validation } from "./formValidation";
import { FormContainer, SubmitButton } from "./styles";

export interface FormData {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(validation),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Thanks for contacting us!");
    reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Please provide your full name."
        type="text"
        placeholder="Name"
        name="name"
        error={errors.name?.message}
        register={{ ...register("name") }}
      />
      <FormInput
        label="Please provide a valid email."
        type="email"
        placeholder="Email Address"
        name="email"
        error={errors.email?.message}
        register={{ ...register("email") }}
      />
      <FormInput
        label="Please provide your company's name."
        type="text"
        placeholder="Company Name"
        name="company"
        error={errors.company?.message}
        register={{ ...register("company") }}
      />
      <FormInput
        label="Please provide your career title."
        type="text"
        placeholder="Title"
        name="title"
        error={errors.title?.message}
        register={{ ...register("title") }}
      />
      <FormTextArea
        label="Please provide a message to us."
        rows={3}
        placeholder="Message"
        name="message"
        error={errors.message?.message}
        register={{ ...register("message") }}
      />
      <SubmitButton>submit</SubmitButton>
    </FormContainer>
  );
};

export default Form;
