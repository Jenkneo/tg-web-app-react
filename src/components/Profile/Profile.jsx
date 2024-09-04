import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import imagePlaceholder from './image_placeholder.png';
import './Profile.css';

const Profile = () => {
    const {user} = useTelegram();

    return (
        <div className={'profile container'}>
            <div className={"profile__container grid"}>
                <div className={"profile__data"}>
                    <div className={"profile__border"}>
                        <div className={"profile__perfil"}>
                            <img src={imagePlaceholder} alt="Logo" />;
                        </div>
                    </div>
                    <h2 className={"profile__name"}>{user?.first_name}</h2>
                    <h3 className={"profile__profession"}>{`@${user?.username}`}</h3>
                </div>
            </div>
        </div>
    );
};

export default Profile;
