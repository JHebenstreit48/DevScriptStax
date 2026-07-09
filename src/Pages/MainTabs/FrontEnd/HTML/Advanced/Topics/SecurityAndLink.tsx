import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecurityAndLink = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/Topics/SecurityAndLink';

  return (
    <>
      <PageLayout>
        <PageTitle title="Advanced HTML Topics - Security & Link" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityAndLink;