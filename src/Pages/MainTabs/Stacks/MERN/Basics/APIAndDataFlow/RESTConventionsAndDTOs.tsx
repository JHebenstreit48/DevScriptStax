import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RESTConventionsAndDTOs = () => {
  const markdownFilePath = 'Stacks/MERN/Basics/APIAndDataFlow/RESTConventionsAndDTOs';

  return (
    <>
      <PageLayout>
        <PageTitle title="REST Conventions & DTOs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RESTConventionsAndDTOs;
