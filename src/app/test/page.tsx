"use client";

import React, { useState } from "react";
import Button from "@/lib/button/Button";
import Modal from "@/lib/modal/Modal";
import Card from "@/lib/card/Card";
import IconButton from "@/lib/button-icon/IconButton";
import Avatar from "@/lib/avatar/Avatar";

const Test = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal open={open} size="sm">
        <Card shape="smooth">
          <div className="flex items-center justify-between p-4 md:p-6">
            <p className="font-sans text-lg font-medium text-muted-900 dark:text-white">
              Invitation
            </p>
            <IconButton
              size="sm"
              shape="full"
              onClick={() => {
                setOpen(false);
              }}
            >
              {/* <Icon icon="lucide:x" className="h-4 w-4" /> */}
            </IconButton>
          </div>
          <div className="p-4 md:px-6 md:py-8">
            <div className="mx-auto w-full max-w-xs text-center">
              <Avatar
                src="/img/avatars/24.svg"
                size="lg"
                className="mx-auto mb-2"
              />
              <h5 className="font-sans text-lg font-light text-muted-900 dark:text-white">
                New Invite
              </h5>
              <p className="font-sans text-sm text-muted-500 dark:text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </div>
          <div className="p-4 md:p-6 ">
            <div className="flex w-full justify-end gap-2">
              <Button
                shape="smooth"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button variant="solid" color="primary" shape="smooth">
                Confirm
              </Button>
            </div>
          </div>
        </Card>
      </Modal>
    </>
  );
};

export default Test;
