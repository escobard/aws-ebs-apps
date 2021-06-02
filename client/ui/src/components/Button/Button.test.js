import Button from "."

describe("Button", () => {

  const props = {
    text: "Some button text",
    callback: () => jest.fn()
  };

  afterAll(() => {
    cleanup();
  });

  it(">> renders snapshot", () => {
    const { container } = render(<Button {...props} />);
    expect(container).toMatchSnapshot();
  });
  it(">> shows button text", () => {
    const {
      text
    } = props;
    const { getByText } = render(<Button {...props} />);
    expect(getByText(text));
  });
  it(">> passed callback function is triggered on button click", () => {
    const {
      text,
      callback
    } = props;
    const { getByText } = render(<Button {...props} />);
    fireEvent.click(getByText(text));
    expect(callback).toHaveBeenCalled();
  })
});
