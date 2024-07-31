import { useState } from "react";
import { Switch } from "@headlessui/react";

type Props = {
  enabled: boolean;
  onChange: (enable: boolean) => void;
};

const CustomSwitch = ({ enabled, onChange }: Props) => {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className={`data-[checked]:gradient-border-bg-blue group inline-flex h-6 w-11 items-center rounded-full border border-bluezodiac transition ${!enabled ? "bg-gray" : "gradient-border-bg-blue"}`}
    >
      <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
    </Switch>
  );
};

export default CustomSwitch;
