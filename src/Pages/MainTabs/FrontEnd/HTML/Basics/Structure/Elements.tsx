import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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