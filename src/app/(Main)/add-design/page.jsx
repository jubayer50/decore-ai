"use client";

import { submitInteriorDesign } from "@/lib/Action/interiorDesign";
import { authClient } from "@/lib/auth-client";
import { uploadImage } from "@/lib/uploadImage";
import {
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
  Button,
  toast,
} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuArrowUpFromLine } from "react-icons/lu";

const AddDesignPage = () => {
  const [imageUrl, setImageUrl] = useState();

  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const designData = Object.fromEntries(formData);

    const imageFile = designData?.image;
    const hostImageUrl = await uploadImage(imageFile);

    const updateData = {
      ...designData,
      image: hostImageUrl,
      userId: user?.id,
    };

    const result = await submitInteriorDesign(updateData);

    if (result.insertedId) {
      toast.success("Design submitted successfully!");
      router.push("/interior-designs");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImageUrl(previewUrl);
  };

  /**
   Living Room, Home Office, Garden & Patio, Studio Apartment, Office Interior, Restaurant Interior, Hotel Room, Industrial Design, Farmhouse Design
   */

  return (
    <div className="max-w-330 mx-auto px-3 mt-6 mb-10">
      <div>
        <h2 className="text-2xl font-semibold">Create Interior Design</h2>
        <p className="text-lg mt-.5">
          Add your design concept and let DecoraAI help you transform spaces
          beautifully.
        </p>
      </div>

      <div className="mt-8">
        <Form
          onSubmit={onSubmit}
          className="max-w-188 border rounded-md p-2 md:p-4 space-y-5"
        >
          <TextField isRequired name="interior_title" type="text">
            <Label>Interior Title</Label>
            <Input
              placeholder="Interior title"
              className={"rounded-md border border-gray-300 shadow-none"}
            />
          </TextField>

          <TextField isRequired name="short_description">
            <Label>Short Description</Label>
            <TextArea
              placeholder="Short description"
              className={"rounded-md border border-gray-300 shadow-none"}
            />
          </TextField>

          <TextField isRequired name="full_details">
            <Label>Full Details</Label>
            <TextArea
              placeholder="Full details"
              className={"rounded-md border border-gray-300 shadow-none"}
            />
          </TextField>

          <div className="flex flex-col md:flex-row gap-3">
            <TextField
              isRequired
              name="space size"
              type="text"
              className={"w-full"}
            >
              <Label>Space Size (squire feet)</Label>
              <Input
                placeholder="Space size"
                className={"rounded-md border border-gray-300 shadow-none"}
              />
            </TextField>

            <TextField name="budget" type="number" className={"w-full"}>
              <Label>Budget Range</Label>
              <Input
                placeholder="Budget range"
                className={"rounded-md border border-gray-300 shadow-none"}
              />
            </TextField>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <Select name="category" className="w-full" placeholder="Select one">
              <Label>Design Category</Label>
              <Select.Trigger
                className={"rounded-md border border-gray-300 shadow-none"}
              >
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover
                className={"rounded-md border border-gray-300 shadow-none"}
              >
                <ListBox>
                  <ListBox.Item id="living room" textValue="Living Room">
                    Living Room
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="home office" textValue="Home Office">
                    Home Office
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="garden & patio" textValue="Garden & Patio">
                    Garden & Patio
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="studio apartment"
                    textValue="Studio Apartment"
                  >
                    Studio Apartment
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="office interior"
                    textValue="Office Interior"
                  >
                    Office Interior
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="restaurant interior"
                    textValue="Restaurant Interior"
                  >
                    Restaurant Interior
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="hotel room" textValue="Hotel Room">
                    Hotel Room
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="industrial design"
                    textValue="Industrial Design"
                  >
                    Industrial Design
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="farmhouse design"
                    textValue="Farmhouse Design"
                  >
                    Farmhouse Design
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <TextField isRequired name="style" type="text" className={"w-full"}>
              <Label>Interior Style</Label>
              <Input
                placeholder="Interior style"
                className={"rounded-md border border-gray-300 shadow-none"}
              />
            </TextField>

            <TextField name="color palette" type="text" className={"w-full"}>
              <Label>Color Palette</Label>
              <Input
                placeholder="Color palette"
                className={"rounded-md border border-gray-300 shadow-none"}
              />
            </TextField>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            {/* image upload */}
            <div className="flex items-center gap-4 flex-1">
              <label
                htmlFor="image"
                className="w-15 h-15 border rounded-md flex items-center justify-center"
              >
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt="image"
                    width={50}
                    height={50}
                    className="w-full h-full rounded-md object-cover"
                  ></Image>
                ) : (
                  <LuArrowUpFromLine className="w-6 h-6"></LuArrowUpFromLine>
                )}

                <input
                  name="image"
                  id="image"
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
              </label>

              <div>
                <p>Upload Profile Picture</p>
                <p className="text-sm text-gray-400/90">JPEG,PNG up to 2MB</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="submit"
              className={"text-white rounded-md bg-[#b2967d]"}
            >
              Design Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddDesignPage;
