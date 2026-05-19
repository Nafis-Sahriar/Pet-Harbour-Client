"use client";

import {Rocket} from "@gravity-ui/icons";
import {Button, Modal} from "@heroui/react";
import RequestCardForModal from "./RequestCardForModal";

export function RequestContainerModal() {
  return (
    <Modal>
      <Button variant="secondary">Requests</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <Rocket className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Adoption Requests</Modal.Heading>
            </Modal.Header>
            <Modal.Body>


                 <RequestCardForModal></RequestCardForModal>
                 <RequestCardForModal></RequestCardForModal>
                 <RequestCardForModal></RequestCardForModal>
                 <RequestCardForModal></RequestCardForModal>


            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}