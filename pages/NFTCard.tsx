import { MediaRenderer, shortenIfAddress } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import { Label } from "flowbite-react";

type NFTCardProps = {
  nft: NFT;
};

const NFTCard = ({ nft }: NFTCardProps) => {
  const maxLength = 50;
  const longText = nft.metadata.description ?? "";
  const truncatedText =
    longText.length > maxLength
      ? longText.slice(0, maxLength - 3) + "..."
      : longText;
  console.log(nft);
  return (
    
    <div className="block rounded-xl p-4 shadow-2xl shadow-indigo-100 max-w-sm bg-white border border-gray-200  dark:bg-gray-800 dark:border-gray-700" >
      <div className="h-48 relative overflow-hidden flex items-start justify-center ">
        {nft && (
          <MediaRenderer
            src={nft.metadata.image}
            className="h-56 w-full rounded-t-lg object-cover"
          />
        )}
      </div>

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Certificate</dt>

            <dd className="font-medium">{nft?.metadata.name ?? ""}</dd>
          </div>
          <div>
            <dt className="sr-only">Description</dt>

            <dd className="text-sm text-gray-500">{truncatedText}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="size-5 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Owner</p>

              <p className="font-medium">
                {shortenIfAddress(nft?.owner ?? "")}
              </p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="size-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Download</p>

              <button className="bg-gray-300 hover:bg-gray-400 text-indigo-700 font-bold py-1 px-1 rounded inline-flex items-center mr-1">
                <span className="">PNG</span>
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-indigo-700 font-bold py-1 px-1 rounded inline-flex items-center">
                <span className="">PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NFTCard;
