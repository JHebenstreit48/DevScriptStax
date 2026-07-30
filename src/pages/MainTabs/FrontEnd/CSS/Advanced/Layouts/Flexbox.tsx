import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Flexbox = () => {
  const markdownFilePath = 'FrontEnd/CSS/Advanced/Layouts/Flexbox';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Layouts - Flexbox" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Flexbox;