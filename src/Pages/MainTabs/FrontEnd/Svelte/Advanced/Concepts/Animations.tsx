import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Animations = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Advanced/Concepts/Animations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Animations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Animations;
