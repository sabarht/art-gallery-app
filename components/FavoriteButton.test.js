import { render, fireEvent } from "@testing-library/react";
import FavoriteButton from "./FavoriteButton";

test("should save non-favorite piece as favorite when clicked", () => {
  const handleToggleFavorite = jest.fn();
  const pieces = {
    slug: "example-slug",
  };
  const artPiecesInfo = ["existing-slug"];
  const { getByText } = render(
    <FavoriteButton
      handleToggleFavorite={handleToggleFavorite}
      pieces={pieces}
      artPiecesInfo={artPiecesInfo}
    />
  );

  const button = getByText("🖤");
  fireEvent.click(button);

  expect(handleToggleFavorite).toHaveBeenCalledTimes(1);
  expect(handleToggleFavorite).toHaveBeenCalledWith("example-slug");
});

test("should remove favorite piece when clicked on a favorite piece", () => {
  const handleToggleFavorite = jest.fn();
  const pieces = {
    slug: "existing-slug",
  };
  const artPiecesInfo = ["existing-slug"];
  const { getByText } = render(
    <FavoriteButton
      handleToggleFavorite={handleToggleFavorite}
      pieces={pieces}
      artPiecesInfo={artPiecesInfo}
    />
  );

  const button = getByText("💖");
  fireEvent.click(button);

  expect(handleToggleFavorite).toHaveBeenCalledTimes(1);
  expect(handleToggleFavorite).toHaveBeenCalledWith("existing-slug");
});
