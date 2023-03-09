import { CreateForm } from "@/components/create-form-antd";
import BaseLayout from "@/layout/BaseLayout";

export const CreateEventTemplate = () => {
  return (
    <BaseLayout>
      <div className="font-inter text-black">
        <CreateForm />
      </div>
    </BaseLayout>
  );
};
