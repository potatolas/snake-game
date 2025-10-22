type Logger = {
  log: (label: string, statement: string) => void;
};

const logger: Logger = {
  log: (label, statement) => {
    if (import.meta.env.DEV) {
      console.log(
        `%c${label}%c ${statement}`,
        "color: black; background-color: lightgray; padding: 2px; border-radius: 3px;",
        "" // Reset style for statement
      );
    }
  },
};

export default logger;