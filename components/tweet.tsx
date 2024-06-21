import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TweetProps {
  username: string;
  date: string;
  content: string;
  feeling: string;
}

const Tweet: React.FC<TweetProps> = ({ username, date, content, feeling }) => (
  <div className="p-4 border-b-2 border-line">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start">
        <Image
          src="/images/az-profile.jpg"
          alt="search"
          width={26}
          height={26}
          className="object-cover w-[46px] h-[46px] rounded-full"
        />
        <div className="pl-2">
          <div className="flex gap-1">
            <p className="text-base font-bold inline-block">
              {username}
              <Image
                src="/images/verify.png"
                alt="verify"
                width={26}
                height={26}
                className="inline w-5 h-5 rounded-full"
              />
            </p>
          </div>
          <p className="text-username text-sm">
            @{username.toLowerCase().replace(" ", "")} • {date}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center rounded-full px-3 py-1.5 border-line border-2 gap-1.5">
        <p className="text-sm font-semibold">{feeling}</p>
      </div>
    </div>
    <p className="pl-[55px] py-2.5 leading-7 text-base">{content}</p>
    <div className="flex justify-between items-center pl-[55px] w-[484px]">
      <div className="flex justify-center items-center gap-2.5 pr-[250px]">
        <Link
          href="#"
          className="cursor flex justify-start items-center w-[93px] gap-1.5"
        >
          <Image
            className="like-icon"
            src="/images/heart.svg"
            alt="heart"
            width={26}
            height={26}
          />
          <p className="text-sm font-normal text-like">0 Likes</p>
        </Link>
        <Link
          href="#"
          className="cursor flex justify-start items-center w-[93px] gap-1.5"
        >
          <Image src="/images/trash.svg" alt="delete" width={26} height={26} />
          <p className="text-sm font-normal text-username">Delete</p>
        </Link>
        <Link
          href="#"
          className="flex justify-start items-center w-[93px] gap-1.5"
        >
          <Image
            src="/images/warning-2.svg"
            alt="warning-2"
            width={26}
            height={26}
          />
          <p className="text-sm font-normal text-username">Report</p>
        </Link>
      </div>
    </div>
  </div>
);

export default Tweet;
