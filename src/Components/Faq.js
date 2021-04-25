import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h2`
	font-family: 'Roboto Condensed';
	border-bottom: 1px solid #333;
`;

const Faq = styled.div`
	text-align: left;
	max-width: 900px;
	margin-bottom: 15px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
	<Faq>
		<SectionTitle>Club FAQ</SectionTitle>
		<h3>What are the rules?</h3>
		<p>
		The readings are sequential: we choose a book to read in 15 days - if necessary, we divide it
		into more than a fortnight. At the end of each fortnight we meet to comment on the book, the routine, 
		the origin of time and the universe and those things 🧙‍♂️. Oh, on this meets, we will also decide the next book in the sequence.
		</p>
		<h3>Why are you doing it?</h3>
		<p>
		Marília and I love to read. Reading together has been a great experience, in addition to making you persist
		in reading, it offers someone to comment on. We strongly recommend it! 🤗 
		</p>
		<h3>
			Do you have a preference for any specific literary genre?
		</h3>
		<p>
			<em>#NeverJudgeABookByItsCover</em>
		</p>
		<h3>Can I join the club?</h3>
		<p>Why not? Contact us, we would love! 📖❤️</p>
		<div style={{ width: 10, height: 10 }} />
	</Faq>
);
