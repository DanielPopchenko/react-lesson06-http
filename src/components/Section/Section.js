import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  console.log(children);
  return (
    <section>
      {title && <h2>{title}</h2>}
      {/* пропс children нужны для того чтобы мы могли делать гроздь */}
      {children}
    </section>
  );
}

// Нужно ставить дефолтные значения, если значение елемента не обязательно
Section.defaultProps = {
  // Пустая строка приводится к false
  title: '',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
