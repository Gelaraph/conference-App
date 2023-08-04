import React from "react";
import Modals from "./Modal";
import { Button } from "@mui/material";
import { styled } from "styled-components";
import { useForm, Controller } from "react-hook-form";
import TextInput from "../TextInput";

const RegisterModal = ({ open, onClose }) => {
  const [success, setSuccess] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    setSuccess(true);
    console.log(data);
  };

  return (
    <Modals open={open} onClose={onClose}>
      <RegisterModalStyle>
        <div className="contact-container">
          <div className="contact-title-container">
            <h1 className="contact-title">
              Have a question or want to work together?
            </h1>
            <p>
              Fill in your info in the form below and I look forward to hearing
              from you!
            </p>
          </div>

          <div className="form-container">
            <form
              acceptCharset="UTF-8"
              action=""
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <div>
                  <label htmlFor="name">Name</label>
                </div>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <TextInput className="contact-input" id="name" {...field} />
                  )}
                />
                {errors.name && <span>{errors.name.message}</span>}
              </div>
              <div>
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      className="contact-input"
                      id="email"
                      type="email"
                      {...field}
                    />
                  )}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>
              <div>
                <div>
                  <label htmlFor="address">Address</label>
                </div>
                <Controller
                  name="address"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Address is required" }}
                  render={({ field }) => (
                    <TextInput
                      className="contact-input"
                      id="address"
                      {...field}
                    />
                  )}
                />
                {errors.address && <span>{errors.address.message}</span>}
              </div>
              <div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                </div>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <TextInput
                      className="contact-input"
                      id="phone"
                      type="tel"
                      placeholder="Country/Region"
                      {...field}
                    />
                  )}
                />
                {errors.phone && (
                  <span className="val-errors">{errors.phone.message}</span>
                )}
              </div>
              <div className="contact-btn">
                <Button type="submit">Send</Button>
              </div>
            </form>
          </div>
        </div>
      </RegisterModalStyle>
    </Modals>
  );
};

const RegisterModalStyle = styled.div`
  .contact-container {
    padding: 2rem 2rem;
    margin-bottom: 3em;
    color: rgb(9, 21, 64);
  }

  textarea,
  .contact-input {
    border: 1.5px solid grey;
    color: #141c3a;
    box-shadow: none;
    border-radius: 4px;
    line-height: 1.5;
    outline: none;
    margin-top: 0.5em;
    transition: 150ms ease;
    font-size: 1rem;
  }
  .contact-input {
    width: 100%;
    padding: 0.7em;
    height: 40px;
  }

  textarea {
    height: 200px;
    display: block;
    max-width: 100%;
    min-width: 100%;
    padding: calc(0.75em - 1px);
    resize: vertical;
  }
  .textarea-cont {
    width: 100%;
    margin: 0 auto;
    margin-top: 2em;
  }
  .contact-input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    gap: 2em;
  }
  .contact-container label {
    font-weight: 400;
    font-family: "eurostile", sans-serif;
    font-size: 1.2rem;
    color: rgba(41, 51, 71, 0.65);
  }

  .contact-input-container > div {
    width: 50%;
  }
  .contact-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
  }
  .contact-container div:first-child .contact-title {
    text-align: center;
    font-size: 2em;
    margin-bottom: 0.3em;
  }

  .contact-title-container {
    margin-bottom: 2em;
    text-align: center;
  }
  .invalid-feedback {
    color: red;
    font-size: 12px;
    margin-top: 0.3em;
  }

  input:focus,
  textarea:focus {
    border-color: rgb(9, 21, 64);
  }

  @media (max-width: 767px) {
    .contact-input-container {
      flex-direction: column;
      row-gap: 2em;
    }
    .contact-input-container > div {
      width: 100%;
    }
  }
  @media (max-width: 670px) {
    .contact-container {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
`;

export default RegisterModal;
