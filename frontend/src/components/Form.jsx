import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

import request from "utils/request";

const Form = ({ setShortenedUrl }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      const { url } = values;
      const response = await request.post("/url", {
        originalUrl: url,
      });
      const data = response.data;
      const { shortenedUrl } = data;
      setShortenedUrl(process.env.REACT_APP_BACKEND_URL + shortenedUrl);
    } catch (err) {
      alert("Error occured, please try again");
    }
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
      <Button sx={{ mt: 8, mb: 4 }} isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
