import styled from "styled-components";

export const RectangleParentRoot = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  height: 67.5rem;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  width: 80%;
  height: auto;
  background-color: #efefef;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;
/* ============================================================================================================================================================================================*/

export const Header = styled.div`
  top: 0rem;
  left: 0rem;
  background-color: var(--color-dodgerblue);
  width: 100%;
  height: 7.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: 5rem;
  padding-right: 5rem;
`;

export const HeaderText = styled.div`
  font-size: 2rem;
  color: var(--color-white);
`;

export const HeaderButton = styled.button`
  background-color: black;
  color: white;
  padding: 1rem;
  border-radius: var(--br-mini);
`;
/* ============================================================================================================================================================================================*/
export const TopTitle = styled.b`
  font-size: 1.5rem;
  color: var(--color-darkslateblue);
  transform: translateX(-10rem);
  padding: 2rem 0;
`;

export const TopBoxContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25));
  width: 46.125rem;
  height: 21.125rem;
  font-size: var(--single-line-body-base-size);
`;

export const TopBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  border: 2px solid var(--color-white);
  width: 12.5rem;
  height: 18.75rem;
  background: linear-gradient(180deg, #fff 22.01%, #fff 100%);

  &:hover {
    background: linear-gradient(180deg, #fff 22.01%, #2788f9 100%);
  }
`;

export const TopBoxBtnContainer = styled.div`
  opacity: 0;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
`;

export const TopBoxButton = styled.button`
  border-radius: var(--corner-extra-small);
  border: none;
  background-color: var(--color-gray-100);
  width: 9.85rem;
  height: 2.175rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--space-300);
  box-sizing: border-box;
  margin-bottom: 0.3rem;
  color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: aliceblue;
    color: black;
  }
  &:active {
    transform: scale(95%);
    transform: translateY(0.1rem);
    transition: all 0.2s ease-in-out;
  }
`;

export const TopBoxButton2 = styled.button`
  border-radius: var(--corner-extra-small) var(--corner-extra-small)
    var(--number15) var(--number15);
  border: none;
  background-color: var(--color-gray-100);
  width: 9.85rem;
  height: 2.175rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--space-300);
  box-sizing: border-box;
  color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: black;
    background-color: aliceblue;
    transition: all 0.2s ease-in-out;
  }
  &:active {
    transform: scale(95%);
    transform: translateY(0.1rem);
    transition: all 0.2s ease-in-out;
  }
`;
export const TopBoxText = styled.b`
  line-height: 1.5rem;
  color: var(--color-black);
  margin-top: 1rem;
`;
/* ============================================================================================================================================================================================*/

export const Row = styled.div`
  height: 3rem;
`;

export const UnderTitle = styled.b`
  font-size: 1.5rem;
  color: var(--color-darkslateblue);
  transform: translateX(-7rem);
  padding: 2rem 0;
`;

export const Post = styled.div`
  position: relative;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.3);
  border-radius: var(--br-mini);
  border: 1px solid rgba(154, 154, 154, 0.1);
  box-sizing: border-box;
  width: 40.875rem;
  height: 18.5rem;
  overflow: hidden;
  font-size: var(--font-size-xs);
  color: var(--color-black);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5),
    rgba(39, 136, 249, 0.5)
  );
  width: 40.875rem;
  height: 18.75rem;
  margin-bottom: 15rem;
`;

export const PostContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const LabelWrapper = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;

export const LabelText = styled.button`
  border-radius: var(--br-11xs);
  background-color: var(--color-gainsboro-100);
  border: 0.5px solid var(--color-gray-200);
  position: relative;
  line-height: 1rem;
  padding: var(--padding-11xs) var(--padding-9xs);
`;

export const Name = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SubName = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 1rem;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
