import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

const URL_REGEX =
  "https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)";

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
            pattern: {
              value:
                /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
              message: "Please enter valid url",
            },
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
