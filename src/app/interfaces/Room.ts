import { RoomType } from "./RoomType";

export type Room = {
    id: number;
    type: RoomType;
    hasTv: boolean;
    hasFridge: boolean;
    hasFan: boolean;
    hasKitchen: boolean;
    hasBathroom: boolean;
}

