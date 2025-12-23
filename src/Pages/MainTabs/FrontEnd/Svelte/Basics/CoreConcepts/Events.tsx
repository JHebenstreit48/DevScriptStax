import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Events = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Basics/CoreConcepts/Events';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Events" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Events;
