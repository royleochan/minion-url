import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.url}>
        <FormLabel htmlFor="url">URL to shorten:</FormLabel>
        <Input
          id="url"
          placeholder="Example: https://google.com"
          {...register("url", {
            required: "Url is required",
          })}
        />
        <FormErrorMessage>{errors.url && errors.url.message}</FormErrorMessage>
      </FormControl>
      <Button sx={{ mt: 10 }} isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
