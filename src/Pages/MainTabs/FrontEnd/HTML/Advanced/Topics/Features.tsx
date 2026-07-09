import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
