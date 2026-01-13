import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ElementsTags = () => {
  const markdownFilePath = 'FrontEnd/HTML/Basics/Structure/Elements';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Elements / Tags" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ElementsTags;
