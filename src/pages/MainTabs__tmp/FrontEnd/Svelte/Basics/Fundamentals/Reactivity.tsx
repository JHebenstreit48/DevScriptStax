import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Reactivity = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Basics/Fundamentals/Reactivity';

  return (
    <>
      <PageLayout>
        <PageTitle title="Reactivity" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Reactivity;
