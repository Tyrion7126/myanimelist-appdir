// import { IconMenu2, IconMoon, IconSearch, IconSun } from "@tabler/icons-react";
import { useState, createContext, useEffect } from "react";
import { Menubar } from "primereact/menubar"
import { MenuItem } from "primereact/menuitem";
import { IconFlame, IconHome, IconMenu2, IconMoon, IconMoon2, IconSearch, IconSun } from "@tabler/icons-react";
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"

export const ThemeContext = createContext("dark");

const Header = () => {
  const [theme, setTheme] = useState<string>("light")
  const items: MenuItem[] = [
    {
      label: "Home",
      icon: <IconHome className="mr-2" size={18} />
    },
    {
      label: "Most Popular",
      icon: <IconFlame className="mr-2" size={18} />,
      items: [
        {
          label: "Anime"
        },
        {
          label: "Manga"
        }
      ]
    },
  ]

  const end = (
    <div className="flex items-center">
      <span className="p-input-icon-left">
        <IconSearch className="mr-2" size={18} />
        <InputText 
          type="text" 
          className="w-4rem sm:w-auto sm:p-inputtext-sm p-inputtext-normal xl:p-inputtext-lg"
          placeholder="Boku No Pico" 
        />
      </span>
      <button
        className="p-link mx-2 p-1 rounded-full hover:bg-neutral-100"
        onClick={() => setTheme(theme == "light" ? "dark":"light")}
      >
        {theme == "light" ?
        <IconMoon />
        : <IconSun />}
      </button>
    </div>
  )
  return (
    <div>
      <Menubar
        className="px-5"
        model={items}
        menuIcon={<IconMenu2 />}
        end={end}
      />
    </div>
  )
}

/*
const Header = () => {
  const [mode, setMode] = useState("dark");
  
  return (
    <ThemeContext.Provider value={mode}>
      <header className="flex font-inter justify-between border-b dark:border-neutral-700 py-3 mx-2 md:mx-3 items-center">
        <div className="lg:mx-5">
          <ActionIcon
            size="lg" 
            radius="md" 
            variant="transparent" 
            color="gray"
            aria-label="menu"
          >
            <IconMenu2 />
          </ActionIcon>
        </div>
        <div className="flex lg:mx-5">
          <form onSubmit={form.onSubmit(console.log)}>
            <TextInput 
              radius="md" 
              rightSectionPointerEvents="all"
              placeholder="Boku no Pico"
              className="shadow-sm ml-2"
              rightSection={<IconSearch />}
              {...form.getInputProps("title")}
            />
          </form>
          <ActionIcon 
            size="lg" 
            radius="md" 
            variant="default"
            className="mx-3 shadow-sm hover:bg-neutral-100 dark:hover:bg-neutral-700"
            aria-label="switch-mode"
            onClick={() => setMode(mode == "dark" ? "light":"dark")}
          >
            {
              mode == "light" ?
                <IconMoon />
              :
                <IconSun />
            }
          </ActionIcon>
          <Button
            size="sm"
            className="dark:bg-indigo-600 bg-blue-500 hover:bg-blue-600 hover:dark:bg-indigo-700 shadow-sm"
            radius="md"
            aria-label="login"
          >
            Login
          </Button>
        </div>
      </header>
    </ThemeContext.Provider>
  );
};*/

export default Header;
