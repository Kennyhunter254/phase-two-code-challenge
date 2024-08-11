import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, removeFromArmy, deleteBot }) {
  return (
    <div className="your-bot-army">
      {army.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={() => removeFromArmy(bot)}
          handleDelete={() => deleteBot(bot)}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
