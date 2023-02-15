/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from 'classnames';
import React from 'react';

type Props = {
  hasActiveTodos: boolean,
  title: string,
  onTitleChange: (newTitle: string) => void,
};

export const Header: React.FC<Props> = ({
  hasActiveTodos,
  title,
  onTitleChange,
}) => (
  <header className="todoapp__header">
    <button
      type="button"
      className={classNames(
        'todoapp__toggle-all',
        { active: !hasActiveTodos },
      )}
    />

    {/* Add a todo on form submit */}
    <form>
      <input
        value={title}
        type="text"
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
        onChange={(event) => {
          onTitleChange(event.target.value);
        }}
      />
    </form>
  </header>
);