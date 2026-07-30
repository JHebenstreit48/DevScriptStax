import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Events = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Basics/CoreConcepts/Events';

  return (
    <>
      <PageLayout>
        <PageTitle title="Events" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Events;
