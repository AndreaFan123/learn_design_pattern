import MoreOption from "./MoreOption";

export default function MoreOptionMenu() {
  return (
    <MoreOption>
      <MoreOption.ToggleIcon />
      <MoreOption.MoreOptionList>
        <MoreOption.MoreOptionItem>Edit</MoreOption.MoreOptionItem>
        <MoreOption.MoreOptionItem>Delete</MoreOption.MoreOptionItem>
      </MoreOption.MoreOptionList>
    </MoreOption>
  );
}
