import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Animations = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Advanced/Concepts/Animations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Animations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Animations;
