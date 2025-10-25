import axios from 'axios';

const API_KEY = import.meta.env.VITE_TALLY_API_KEY;
const FORM_ID = 'mOWANR'; // Replace with your actual form ID

export const submitToWaitlist = async (email: string) => {
  if (!API_KEY) {
    console.error('API key is missing');
    return;
  }

  try {
    const response = await axios.post(
      `https://api.tally.so/forms/${FORM_ID}/submissions`,
      {
        responses: [
          {
            questionId: 'email', // Replace with your actual question ID
            value: email,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error submitting to Tally:', error);
    throw error;
  }
};
