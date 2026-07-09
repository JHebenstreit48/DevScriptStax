import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ElementsTags = () => {
  const markdownFilePath = 'FrontEnd/HTML/Basics/Structure/Elements';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTML Structure - Elements & Tags" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ElementsTags;