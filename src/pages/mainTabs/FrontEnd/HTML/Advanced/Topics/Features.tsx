import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Features = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/Topics/HTML5Features';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTML5 Features" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Features;
