import React from 'react';
import Button, { ButtonClassEnum } from '../components/button/button';
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'


const linkMock = "/link";
const onClickMock = jest.fn()

describe('Button or Link', () => {


    describe('Link', () => {
        it('should rendre'
            , async () => {
                expect(render(<Button
                    classButton={ButtonClassEnum.PRIMARY}
                    labelButton={'Submit'}
                    link={linkMock}
                />
                )).toBeTruthy()
            }
        );
        it('should be visible'
            , async () => {
                render(<Button
                    classButton={ButtonClassEnum.PRIMARY}
                    labelButton={'Submit'}
                    link={linkMock}
                />)
                const result = screen.getByText("Submit")
                expect(result).toBeTruthy()
                expect(result).toBeVisible()
                expect(result).toBeInTheDocument()
            }
        );
        it('should have class btn color primary'
            , async () => {
                const { container } = render(<Button
                    classButton={ButtonClassEnum.PRIMARY}
                    labelButton={'Submit'}
                    link={linkMock}
                />)

                expect(container.firstChild).toHaveClass('mybtn myBtnColorPrimary ')
            }
        );
        it('should have class btn color secondary'
            , async () => {
                const { container } = render(<Button
                    classButton={ButtonClassEnum.SECONDARY}
                    labelButton={'Submit'}
                    link={linkMock}
                />)

                expect(container.firstChild).toHaveClass('mybtn myBtnColorSecondary')

            }
        );
        it('should have text content submit '
            , async () => {
                render(<Button
                    classButton={ButtonClassEnum.PRIMARY}
                    labelButton={'Submit'}
                    link={linkMock}
                />)
                const result = screen.getByText("Submit")

                expect(result).toBeTruthy()

            }
        );
    });
    describe('Button', () => {

        it('should rendre'
            , async () => {
                expect(render(<Button
                    classButton={ButtonClassEnum.PRIMARY}
                    labelButton={'Submit'}
                    onClick={onClickMock}
                />
                )).toBeTruthy()
            }
        );
        it('should be visible'
            , async () => {
                render(<Button
                    classButton={ButtonClassEnum.PRIMARY}
                    labelButton={'Submit'}
                    onClick={onClickMock}
                />)
                const result = screen.getByText("Submit")
                expect(result).toBeTruthy()
                expect(result).toBeVisible()
                expect(result).toBeInTheDocument()
            }
        );
        it('should have class btn color primary'
            , async () => {
                render(<Button
                    classButton={ButtonClassEnum.PRIMARY}
                    labelButton={'Submit'}
                    onClick={onClickMock}
                />)

                const result = screen.getByTestId('buttonContext')
                expect(result).toHaveClass('mybtn myBtnColorPrimary')

            }
        );

        it('should have class btn color secondary'
            , async () => {
                const { container } = render(<Button
                    classButton={ButtonClassEnum.SECONDARY}
                    labelButton={'Submit'}
                    link={linkMock}
                />)

                expect(container.firstChild).toHaveClass('mybtn myBtnColorSecondary')

            });
        it('should have text content submit '
            , async () => {
                render(<Button
                    classButton={ButtonClassEnum.PRIMARY}
                    labelButton={'Submit'}
                    onClick={onClickMock}
                />)
                const result = screen.getByText("Submit")

                expect(result).toBeTruthy()
            }
        );
        it('should onClick call function '
            , async () => {
                render(<Button
                    classButton={ButtonClassEnum.PRIMARY}
                    labelButton={'Submit'}
                    onClick={onClickMock}
                />)
                const result = screen.getByTestId("button")

                userEvent.click(result)
                await waitFor(() => {
                    expect(onClickMock).toHaveBeenCalled()
                    expect(onClickMock).toHaveBeenCalledTimes(1)
                })
            }
        );

    });
});