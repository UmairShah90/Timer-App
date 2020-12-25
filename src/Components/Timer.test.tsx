import { render, fireEvent,act  } from '@testing-library/react';
import Timer from './Timer';
test('render timer initial display with 0 mins and 0 secs', () => {
  const renderObj = render(<Timer />);
  const linkElement = renderObj.getByTestId("timerDisplay");
  expect(renderObj.getByText(/00 : 00/i)).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
test('render timer start button', () => {
    const renderObj = render(<Timer />);
    const linkElement = renderObj.getByText('/Start/i');
    expect(linkElement).toBeInTheDocument();
  });
test('render timer Stop button', () => {
    const renderObj = render(<Timer />);
    const linkElement = renderObj.getByText(/Stop/i);
    expect(linkElement).toBeInTheDocument();
  });
test('render timer Reset button', () => {
    const renderObj = render(<Timer />);
    const linkElement = renderObj.getByText(/Reset/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('testing the stop button', () => { 
    jest.useFakeTimers();
    const renderObj = render(<Timer />); 
    expect(renderObj.getByText(/00 : 00/i)).toBeInTheDocument();
    act(() => {
      fireEvent.click(renderObj.getByText(/Stop/i));
      jest.advanceTimersByTime(10000);
      })
      expect(renderObj.getByText(/00 : 00/i)).toBeInTheDocument();
  });
  test('testing the reset button', () => {
    jest.useFakeTimers();
    const renderObj = render(<Timer />);
    expect(renderObj.getByText(/00 : 00/i)).toBeInTheDocument();
    act(() => {
    fireEvent.click(renderObj.getByText(/Reset/i));
    jest.advanceTimersByTime(10000);
    })
    expect(renderObj.getByText(/00 : 00/i)).toBeInTheDocument();
    act(() => {
      fireEvent.click(renderObj.getByText(/Start/i));
      jest.advanceTimersByTime(20000);
      fireEvent.click(renderObj.getByText(/Reset/i));
      jest.advanceTimersByTime(20000);
      fireEvent.click(renderObj.getByText(/Reset/i));
      })
      expect(renderObj.getByText(/00 : 00/i)).toBeInTheDocument();
  });