import React from "react";

function BotCard({ bot, handleClick, handleDelete }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>{bot.catchphrase}</p>
      <button onClick={handleClick}>Enlist</button>
      <button onClick={handleDelete} className="delete-button">X</button>
    </div>
  );
}

export default BotCard;
