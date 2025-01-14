import React, { useState } from "react";
import styled from "styled-components";

// Estilização do sino e do contador
const BellContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const BellIcon = styled.div`
  font-size: 2rem;
  color: #8a998e; /* Cor do sino */
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const NotificationBell: React.FC = () => {
  const [notifications, setNotifications] = useState(0);

  // Simula a chegada de um novo formulário
  const handleNewNotification = () => {
    setNotifications((prev) => prev + 1);
  };

  return (
    <div>
      <BellContainer>
        <BellIcon>🔔</BellIcon>
        {notifications > 0 && <NotificationBadge>{notifications}</NotificationBadge>}
      </BellContainer>
      <button onClick={handleNewNotification}>Adicionar Notificação</button>
    </div>
  );
};

export default NotificationBell;
