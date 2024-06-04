import React from 'react';

export const LogicielsCompétences : React.FC = () => {
  return (
    <section className="mb-5">
      <h2 className="text-2xl font-extrabold mb-2 text-[#787FCD]" >Logiciels et Compétences</h2>
      <div>

        <h3 className='text-1xl font-extrabold underline'>Web</h3>
        <p className='ml-2 mb-2'><em>HTML, CSS </em></p>
        <h3 className='text-1xl font-extrabold underline'>Programmation</h3>
        <p className='ml-2 mb-2 '><em>PYTHON, C, SQL, PLSQL, NoSQL, Matlab </em></p>
        <h3 className='text-1xl font-extrabold underline'>Autres Compétences Informatiques</h3>
        <p className='ml-2 mb-2'><em>Cloud Computing, Power BI, Deep Learning, UML</em> </p>

    </div>
    </section>
  );
};
