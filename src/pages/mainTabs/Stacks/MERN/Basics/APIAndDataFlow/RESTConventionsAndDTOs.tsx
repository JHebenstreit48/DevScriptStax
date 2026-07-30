import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
