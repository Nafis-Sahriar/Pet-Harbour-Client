"use client";

import React from "react";

import { PencilToSquare } from "@gravity-ui/icons";

import {Button, FieldError, Input, Label, ListBox, Modal, Select, Surface, TextArea,TextField,
} from "@heroui/react";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const EditPet = ({ pet }) => {

  const id = pet?._id;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedPetData = Object.fromEntries(formData.entries());

      const res = await fetch(`http://localhost:5000/updatePet/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPetData),
      });

      const data = await res.json();

      if(res.ok)
      {
        toast.success("Pet updated successfully!");
        redirect('/dashboard/my-listings');
      }
      else{
        toast.error(`Failed to update pet: ${data.message}`);
      }




    // console.log(updatedPetData);
    // console.log(id);
  };

  return (
    <Modal>
      <Button
        isDisabled={pet?.adoptionStatus === "adopted"}
       className="bg-[#F4E7D3] text-[#2F2D2A] hover:bg-[#E8D1B1] rounded-2xl font-semibold">
        <PencilToSquare className="size-4" />
        {pet?.adoptionStatus === "adopted" ? "Can't Edit" : "Edit Pet"}
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-5xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-[#F4E7D3] text-[#80573A]">
                <PencilToSquare className="size-5" />
              </Modal.Icon>

              <Modal.Heading className="font-black text-3xl text-[#2F2D2A]">
                Edit Pet
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="p-8 space-y-8" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TextField
                      name="petName"
                      isRequired
                      defaultValue={pet?.petName}
                    >
                      <Label>Pet Name</Label>

                      <Input className="rounded-2xl" />

                      <FieldError />
                    </TextField>

                    <div>
                      <Select
                        name="species"
                        defaultValue={pet?.species}
                        className="w-full"
                      >
                        <Label>Species</Label>

                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />

                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>


                          <ListBox>
                            <ListBox.Item id="Dog">
                              Dog
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Cat">
                              Cat
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Bird">
                              Bird
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Rabbit">
                              Rabbit
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Fish">
                              Fish
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Hamster">
                              Hamster
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>

                             
                        </Select.Popover>
                      </Select>
                    </div>

                    <TextField
                      name="breed"
                      isRequired
                      defaultValue={pet?.breed}
                    >
                      <Label>Breed</Label>

                      <Input className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    <TextField
                      name="age"
                      type="number"
                      isRequired
                      defaultValue={pet?.age}
                    >
                      <Label>Age</Label>

                      <Input type="number" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    <div>
                      <Select
                        name="gender"
                        defaultValue={pet?.gender}
                        className="w-full"
                      >
                        <Label>Gender</Label>

                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />

                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Male">
                              Male
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Female">
                              Female
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    <div className="md:col-span-2">
                      <TextField
                        name="imageUrl"
                        isRequired
                        defaultValue={pet?.imageUrl}
                      >
                        <Label>Image URL</Label>

                        <Input type="url" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    <TextField
                      name="healthStatus"
                      isRequired
                      defaultValue={pet?.healthStatus}
                    >
                      <Label>Health Status</Label>

                      <Input className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    <div>
                      <Select
                        name="vaccinationStatus"
                        defaultValue={pet?.vaccinationStatus}
                        className="w-full"
                      >
                        <Label>Vaccination Status</Label>

                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />

                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Vaccinated">
                              Vaccinated
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Not Vaccinated">
                              Not Vaccinated
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    <TextField
                      name="location"
                      isRequired
                      defaultValue={pet?.location}
                    >
                      <Label>Location</Label>

                      <Input className="rounded-2xl" />

                      <FieldError />
                    </TextField>

                    <TextField
                      name="adoptionFee"
                      type="number"
                      isRequired
                      defaultValue={pet?.adoptionFee}
                    >
                      <Label>Adoption Fee</Label>

                      <Input type="number" className="rounded-2xl" />

                      <FieldError />
                    </TextField>

                    <div className="md:col-span-2">
                      <TextField
                        name="description"
                        isRequired
                        defaultValue={pet?.description}
                      >
                        <Label>Description</Label>

                        <TextArea className="rounded-3xl" />

                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button
                      slot="close"
                      variant="outline"
                      className="rounded-2xl text-[#2F2D2A] hover:bg-[#E8D1B1] border-[#E8D1B1]"

                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      className="rounded-2xl bg-[#CFA77A] hover:bg-[#BB9368] text-white px-8"
                    >
                      Update Pet
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditPet;
