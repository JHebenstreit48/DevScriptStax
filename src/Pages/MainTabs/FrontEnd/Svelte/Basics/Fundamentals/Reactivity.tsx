import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Reactivity = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Basics/Fundamentals/Reactivity';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Reactivity" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Reactivity;
