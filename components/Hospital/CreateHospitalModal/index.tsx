import { useForm, Controller, ControllerRenderProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActionMeta, MultiValue } from "react-select";
import CreatableSelect from "react-select/creatable";
import FlexContainer from "@/components/FlexContainer";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { H3 } from "@/components/Typography";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { IPlan } from "@/models/plan";
import {
  createHospitalInput,
  createHospitalSchema,
} from "@/schemas/Hospitals/CreateHospitalSchema";
import { PlanValue, updateOptions } from "@/utils/HospitalUtils";

interface ICreateHospitalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: createHospitalInput) => void;
  plans: IPlan[];
}

const CreateHospitalModal: React.FC<ICreateHospitalModalProps> = ({
  isOpen,
  onClose,
  onCreate,
  plans,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<createHospitalInput>({
    resolver: zodResolver(createHospitalSchema),
  });
  if (!isOpen) return null;

  const options = plans.map((plan) => ({
    value: {
      id: plan.id,
      name: plan.name,
    },
    label: plan.name,
  }));

  const onSubmit = (data: createHospitalInput) => {
    onCreate(data);
  };

  const handleChange = (
    value: MultiValue<PlanValue>,
    actionMeta: ActionMeta<PlanValue>,
    field: ControllerRenderProps<
      {
        name: string;
        location: string;
        plans: PlanValue[];
      },
      "plans"
    >
  ) => {
    if (actionMeta.action === "create-option") {
      const newValue = updateOptions(value, plans);
      field.onChange(newValue);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <FlexContainer
        $direction="column"
        $width="100%"
        $height="100%"
        $align="flex-start"
      >
        <H3>New Hospital</H3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "100%",
          }}
        >
          <FlexContainer
            $direction="column"
            $justify="center"
            $align="flex-start"
            $gap="1em"
            $height="100%"
            $width="100%"
          >
            <Label htmlFor="name" $errorMesssage={errors.name?.message}>
              Hospital Name
            </Label>
            <Input
              placeholder="Enter hospital name"
              {...register("name")}
              $error={errors.name ? true : false}
            />

            <Label htmlFor="location" $errorMesssage={errors.location?.message}>
              Location
            </Label>
            <Input
              placeholder="Eg: HOUSTON, TX"
              {...register("location")}
              $error={errors.location ? true : false}
            />

            <Label htmlFor="plans" $errorMesssage={errors.plans?.message}>
              Plans
            </Label>
            <Controller
              name="plans"
              control={control}
              render={({ field }) => (
                <CreatableSelect
                  {...field}
                  options={options as any}
                  isMulti
                  onChange={(value, actionMeta) => {
                    field.onChange(value);
                    handleChange(value, actionMeta, field);
                  }}
                />
              )}
            />
          </FlexContainer>

          <FlexContainer
            $justify="flex-end"
            $align="center"
            $gap="0.5em"
            $margin="2em 0 0 0"
            $width="100%"
          >
            <Button $variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button $variant="primary" type="submit">
              Create
            </Button>
          </FlexContainer>
        </form>
      </FlexContainer>
    </Modal>
  );
};

export default CreateHospitalModal;
